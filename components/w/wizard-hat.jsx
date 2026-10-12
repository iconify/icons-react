import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.btqlefbal {
  d: path("m12.75 10.22l.41.89q.15.32.49.36l.98.12q.35.04.09.28l-.72.66q-.26.24-.19.58l.19.97q.07.34-.24.17l-.85-.48q-.31-.17-.62 0l-.85.48q-.31.17-.24-.17l.19-.97q.07-.34-.19-.58l-.72-.66q-.26-.24.09-.28l.98-.12q.34-.04.49-.36l.41-.89q.15-.32.3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i4g-vmbrw {
  d: path("m14.07 3.91l3.36 11.93q.32 1.16-.88 1.16h-9.1q-1.2 0-.64-1.06l6.38-12.13q.56-1.06.88.1");
}

.p4op01zyd {
  width: 18.5px;
  height: 3.5px;
  x: 2.75px;
  y: 17px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><path class="i4g-vmbrw"/><rect class="p4op01zyd"/><path class="btqlefbal"/></g>`,
		"fallback": "iconoven:wizard-hat",
	});
}

export default Component;
