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
		"content": `<style>.bmaothb8r {
  d: path("M26.79 4.5c-.231.006-.47.044-.704.122L12.34 9.175a2.37 2.37 0 0 0-1.505 2.999l7.216 21.778v-20.51a2.367 2.367 0 0 1 2.373-2.371h10.298l-1.638-4.946a2.365 2.365 0 0 0-2.293-1.624Zm-6.355 6.618a2.364 2.364 0 0 0-2.371 2.37v27.639a2.367 2.367 0 0 0 2.37 2.373h14.482a2.37 2.37 0 0 0 2.371-2.373V13.488a2.366 2.366 0 0 0-2.37-2.371z");
}

.u3_bcfbni {
  d: path("M21.622 18.229h2.415v2.445h-2.415zm4.759-.028h2.415v2.445h-2.415zm4.846.038h2.415v2.445h-2.415z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="bmaothb8r"/><path class="u3_bcfbni"/></g>`,
		"fallback": "arcticons:zbiletem",
	});
}

export default Component;
