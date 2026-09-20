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
		"content": `<style>.wk2eu-39g {
  fill: currentColor;
  d: path("M3.175 19.825Q2 18.65 2 17t1.175-2.825T6 13t2.825 1.175T10 17t-1.175 2.825T6 21t-2.825-1.175m12 0Q14 18.65 14 17t1.175-2.825T18 13t2.825 1.175T22 17t-1.175 2.825T18 21t-2.825-1.175m-6-10Q8 8.65 8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11T9.175 9.825");
}
</style><path class="wk2eu-39g"/>`,
		"fallback": "material-symbols:workspaces-rounded",
	});
}

export default Component;
