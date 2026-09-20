import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghvfd6btu.css';
import '../../css/v/vio9gfbpv.css';
import '../../css/g/gu24prbpy.css';
import '../../css/l/lsudu1uhs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghvfd6btu"/><path class="vio9gfbpv"/><path class="gu24prbpy"/><path class="lsudu1uhs"/>`,
		"fallback": "openmoji:wine-glass",
	});
}

export default Component;
