import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eibdgkb_a.css';
import '../../css/b/bk8xu6baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eibdgkb_a"/><path class="bk8xu6baj"/>`,
		"fallback": "token:wlkn",
	});
}

export default Component;
