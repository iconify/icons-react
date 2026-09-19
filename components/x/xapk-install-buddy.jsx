import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cpsj61b5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.932 26.85v8a2.895 2.895 0 0 1-1.87 2.708L23.998 42.5l-13.062-4.942a2.895 2.895 0 0 1-1.87-2.708v-8m20.184-10.1l5.5-5.5");
}

.igeivrb6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 26v16.5m0-37V15m14.932 5.35L42.5 25.5l-14.932 5.65L24 26zm0 0L33 18");
}

.sygjc5bhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.068 20.35L5.5 25.5l14.932 5.65L24 26Zm0 0L15 18m3.75-1.25l-5.5-5.5");
}
</style><path class="igeivrb6g"/><path class="cpsj61b5w"/><path class="sygjc5bhw"/>`,
		"fallback": "arcticons:xapk-install-buddy",
	});
}

export default Component;
