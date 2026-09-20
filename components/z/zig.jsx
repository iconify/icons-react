import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy_v_8_dd.css';
import '../../css/a/a38e_428a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy_v_8_dd"/><path class="a38e_428a"/>`,
		"fallback": "material-icon-theme:zig",
	});
}

export default Component;
