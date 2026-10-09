import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm5w_o49z.css';
import '../../css/f/f_tlp__ao.css';
import '../../css/u/us9cbxkls.css';
import '../../css/r/rdd2babaj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm5w_o49z"/><path class="f_tlp__ao"/><path class="us9cbxkls"/><path class="rdd2babaj"/>`,
		"fallback": "energy-icons:yurt-20-bold",
	});
}

export default Component;
