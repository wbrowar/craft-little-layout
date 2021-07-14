<template>
  <div class="ll-grid ll-grid-cols-1 ll-overflow-x-auto ll-max-w-full">
    <div class="ll-flex ll-flex-row ll-space-x-1 ll-items-center ll-w-full">
      <div :id="`little-layout-boxes-${ fieldId }`" class="ll-space-y-1">
        <div class="ll-flex ll-flex-row ll-flex-nowrap ll-space-x-1" v-for="row in layoutRows">
          <div
              :ref="`${col}|${row}`"
              tabindex="0"
              :class="[boxClasses, boxClassesForBox(col, row)]"
              v-for="col in layoutCols"
              @click="editable ? boxClicked([col, row]) : null"
              @mouseleave="boxMousedOut(col, row)"
              @keydown.enter.prevent="editable ? boxClicked([col, row]) : null"
              @keydown.space.prevent="editable ? boxClicked([col, row]) : null"
              @keydown.up.prevent="keyboardArrowPressed('up', [col, row])"
              @keydown.right.prevent="keyboardArrowPressed('right', [col, row])"
              @keydown.down.prevent="keyboardArrowPressed('down', [col, row])"
              @keydown.left.prevent="keyboardArrowPressed('left', [col, row])"
          ></div>
        </div>
      </div>
      <div v-if="clearable && editable && hasSelected">
        <button ref="clear" type="button" class="clear-btn" title="Clear" aria-label="Clear" @click="clearSelected"></button>
      </div>
    </div>
    <p class="ll-mt-1 ll-mb-0 ll-text-sm ll-text-light" v-if="showScrollMessage">{{ scrollMessage }}</p>
    <input type="hidden" :id="fieldId" :name="fullFieldName" autofocus="" autocomplete="off" :value="fieldValue" v-if="valueUpdated && fieldId && fullFieldName">
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'LittleLayoutFieldControl',
  props: {
    clearable: { type: Boolean, default: false },
    editable: { type: Boolean, default: false },
    fieldNamespace: String,
    fieldDefault: String,
    fieldId: String,
    fieldName: String,
    layoutCols: Number,
    layoutRows: Number,
    selectionMode: { type: String, default: 'box' },
    scrollMessage: String,
  },
  setup: (props) => {
    const defaultValue = props.fieldDefault ? props.fieldDefault.split('|') : [];

    const handleResize = ref();
    const showScrollMessage = ref(false);
    const status = ref('idle');
    const timer = ref();
    const valueUpdated = ref(false);
    const xStart = defaultValue[0] ? ref(parseInt(defaultValue[0])) : ref();
    const xEnd = defaultValue[1] ? ref(parseInt(defaultValue[1])) : ref();
    const yStart = defaultValue[2] ? ref(parseInt(defaultValue[2])) : ref();
    const yEnd = defaultValue[3] ? ref(parseInt(defaultValue[3])) : ref();

    return { handleResize, showScrollMessage, status, timer, valueUpdated, xStart, xEnd, yStart, yEnd }
  },
  computed: {
    // Classes for each coordinate box
    boxClasses() {
      // const classes = ['ll-relative ll-flex-shrink-0 ll-w-8 ll-h-8 md:ll-w-5 md:ll-h-5 ll-border ll-border-solid ll-border-hairline-medium focus:ll-outline-none focus:ll-ring-4 focus:ll-ring-focus-light focus:ll-z-10'];
      const classes = ['ll-relative ll-flex-shrink-0 ll-w-8 ll-h-8 md:ll-w-6 md:ll-h-6 ll-border ll-border-solid ll-border-hairline-medium focus:ll-outline-none'];

      if (this.editable) {
        classes.push(`hover:ll-bg-primary focus:ll-bg-primary`);
      }

      return classes;
    },
    fieldValue() {
      if (this.xStart && this.xEnd && this.yStart && this.yEnd) {
        return `${ this.xStart }|${ this.xEnd }|${ this.yStart }|${ this.yEnd }`;
      }
      return 'empty';
    },
    fullFieldName() {
      return `${ this.fieldNamespace }[${ this.fieldName }]`
    },
    hasSelected() {
      return this.xStart || this.xEnd || this.yStart || this.yEnd;
    },
    selectedBoxes() {
      const selected = [];

      if (this.selectionMode === 'box') {
        if (this.xStart && this.yStart && this.xEnd && this.yEnd) {
          for (let x = this.xStart; x < (this.xEnd + 1); x++) {
            for (let y = this.yStart; y < (this.yEnd + 1); y++) {
              selected.push(`${x}|${y}`);
            }
          }
        }
      } else if (this.selectionMode === 'single') {
        selected.push(`${this.xStart}|${this.yStart}`);
      }

      return selected;
    },
  },
  methods: {
    boxClicked(coordinates) {
      const x = coordinates[0];
      const y = coordinates[1];
      if (this.status === 'idle') {
        this.xStart = this.xEnd = x;
        this.yStart = this.yEnd = y;

        if (this.selectionMode === 'box') {
          this.timer = setInterval(() => {
            const newEl = this.$refs[`${ x }|${ y }`];

            if (newEl) {
              newEl.blur();
            }

            this.status = 'idle';
          }, 10000);
          this.status = 'inputStarted';
        }
      } else if (this.status === 'inputStarted') {
        if (x < this.xStart) {
          this.xEnd = this.xStart;
          this.xStart = x;
        } else {
          this.xEnd = x;
        }
        if (y < this.yStart) {
          this.yEnd = this.yStart;
          this.yStart = y;
        } else {
          this.yEnd = y;
        }
        this.endTimer();
      }

      this.removePlaceholderInput();
    },
    boxClassesForBox(col, row) {
      const classes = [];

      if (this.selectedBoxes.includes(`${col}|${row}`)) {
        classes.push(`ll-bg-select-dark`);
      } else {
        classes.push(`ll-bg-select-light`);
      }

      if (col === 1 && row === 1) {
        classes.push(`ll-rounded-tl-md`);
      }
      if (col === 1 && row === this.layoutRows) {
        classes.push(`ll-rounded-bl-md`);
      }
      if (col === this.layoutCols && row === 1) {
        classes.push(`ll-rounded-tr-md`);
      }
      if (col === this.layoutCols && row === this.layoutRows) {
        classes.push(`ll-rounded-br-md`);
      }

      return classes;
    },
    boxMousedOut(col, row) {
      const newEl = this.$refs[`${ col }|${ row }`];

      if (newEl) {
        newEl.blur();
      }
    },
    clearSelected() {
      this.xStart = this.xEnd = this.yStart = this.yEnd = null;
      this.endTimer();
      this.removePlaceholderInput();
    },
    endTimer() {
      clearInterval(this.timer);
      this.status = 'idle';
    },
    keyboardArrowPressed(direction, source = null) {
      let newCol = source?.[0] ? source[0] : 1;
      let newRow = source?.[1] ? source[1] : 1;

      switch (direction) {
        case 'up':
          newRow -= 1;
          break;
        case 'right':
          newCol += 1;
          break;
        case 'down':
          newRow += 1;
          break;
        case 'left':
          newCol -= 1;
          break;
      }

      const newEl = this.$refs[`${ newCol }|${ newRow }`];

      if (newEl) {
        newEl.focus();
      }
    },
    keyboardTabPressed() {
      const newEl = this.$refs['clear'];

      if (newEl) {
        newEl.focus();
      }
    },
    removePlaceholderInput() {
      const fieldPlaceholderEl = document.querySelector(`[data-little-layout-placeholder="${ this.fieldId }"]`);
      if (fieldPlaceholderEl) {
        fieldPlaceholderEl.parentElement.removeChild(fieldPlaceholderEl);
      }
      this.valueUpdated = true;
    },
  },
  mounted() {
    const fieldWrapper = document.getElementById(`${ this.fieldId }-field`);
    if (fieldWrapper) {
      this.handleResize = new ResizeObserver(entries => {
        for (let entry of entries) {
          const boxes = document.getElementById(`little-layout-boxes-${ this.fieldId }`);

          if (boxes) {
            const boxesWidth = boxes.offsetWidth;
            const containerWidth = entry.target.offsetWidth;

            this.showScrollMessage = boxesWidth > containerWidth;
          }
        }
      });
      this.handleResize.observe(fieldWrapper);
    }
  },
})
</script>
