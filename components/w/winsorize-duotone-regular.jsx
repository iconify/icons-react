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
		"content": `<style>.aqrf9ebcv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 8h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ex75cacie {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g9aitcb2z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 12v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.idh0ojb3a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n13xotb4j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oe-98mb0w {
  d: path("M12 6v12");
}

.sjev68umd {
  d: path("M6 11v7");
}

.vdq8lyksd {
  d: path("M18 12v6");
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="n13xotb4j"/><path class="idh0ojb3a"/><path class="g9aitcb2z"/><path class="aqrf9ebcv"/><path class="ex75cacie"/><path class="sjev68umd"/><path class="oe-98mb0w"/><path class="vdq8lyksd"/><path class="vhnbtvbtn"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:winsorize-duotone-regular",
	});
}

export default Component;
