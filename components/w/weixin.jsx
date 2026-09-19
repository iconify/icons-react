import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfxd2tr0q.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfxd2tr0q"/>`,
		"fallback": "fa-brands:weixin",
	});
}

export default Component;
