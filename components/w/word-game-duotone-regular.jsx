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
		"content": `<style>.gszsvr09c {
  d: path("M14 6v12h7V6Z");
}

.izycrzbmp {
  d: path("M16 14h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r8lmp6u5e {
  fill: currentColor;
  d: path("M14 6v12h7V6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rh_yjfbed {
  fill: currentColor;
  d: path("M3 6v12h7V6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s_sj9bjbj {
  d: path("m4.5 14 2 -2 2 2");
}

.xyvnrdm2l {
  d: path("M3 6v12h7V6Z");
}
</style><g class="nrj6p8qat"><path class="rh_yjfbed"/><path class="r8lmp6u5e"/><path class="xyvnrdm2l"/><path class="gszsvr09c"/><path class="s_sj9bjbj"/><path class="izycrzbmp"/></g>`,
		"fallback": "iconmind:word-game-duotone-regular",
	});
}

export default Component;
