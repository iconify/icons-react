import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bqgkxtcew.css';
import '../../css/o/oygve5bcg.css';
import '../../css/r/r9cpugb5q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="bqgkxtcew"/><path class="oygve5bcg"/><path class="r9cpugb5q"/></g>`,
		"fallback": "catppuccin:webpack",
	});
}

export default Component;
