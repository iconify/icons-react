import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl1gw9yva.css';
import '../../css/g/gk_snkblx.css';
import '../../css/i/ifc5sxbuc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl1gw9yva"/><path class="gk_snkblx"/><circle class="ifc5sxbuc"/>`,
		"fallback": "ooui:window-rtl",
	});
}

export default Component;
