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
		"content": `<style>.ct_gq1boh {
  fill: currentColor;
  d: path("M15.406 18.289q.406-.768.621-1.613t.215-1.763q0-1.846-.817-3.403t-2.202-2.599l-2.165 2.166V3.616h7.461l-2.127 2.126q1.224 1.099 1.94 2.618q.718 1.519.718 3.284q0 2.102-.995 3.837t-2.65 2.808m-9.924 2.095l2.146-2.126q-1.229-1.099-1.943-2.618q-.715-1.519-.715-3.284q0-2.102.996-3.837Q6.96 6.784 8.6 5.711q-.406.768-.614 1.613q-.209.845-.209 1.762q0 1.847.81 3.403t2.19 2.6l2.146-2.166v7.461z");
}
</style><path class="ct_gq1boh"/>`,
		"fallback": "material-symbols-light:wifi-protected-setup-outline",
	});
}

export default Component;
