import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_swcb_o.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/h/h_d0tjb4u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWCQyfbqp"><g class="v1_swcb_o"><path class="p-3d8dotc"/><path class="h_d0tjb4u"/></g></mask></defs><path mask="url(#SVGWCQyfbqp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:xingfuli",
	});
}

export default Component;
