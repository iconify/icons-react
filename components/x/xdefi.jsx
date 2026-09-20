import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1tdwcb_m.css';
import '../../css/m/m-0kq_b5b.css';
import '../../css/u/uhr3ctv0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1tdwcb_m"/><path class="m-0kq_b5b"/><path class="uhr3ctv0t"/>`,
		"fallback": "token:xdefi",
	});
}

export default Component;
