import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8z4pn8gg.css';
import '../../css/e/ep_fppbyz.css';
import '../../css/r/r8l_tobly.css';
import '../../css/s/sex6sykap.css';

const viewBox = {"width":773.12,"height":773.12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG8GbXecrY" x1="0" x2="0" y1="0" y2="1"><stop offset="0" class="x8z4pn8gg"/><stop offset="1" class="ep_fppbyz"/></linearGradient><circle fill="url(#SVG8GbXecrY)" class="r8l_tobly"/><path class="sex6sykap"/>`,
		"fallback": "thesvg-color:zulip",
	});
}

export default Component;
