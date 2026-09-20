import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6v7tkb8a.css';
import '../../css/q/qtysfgqaq.css';
import '../../css/i/im3ryyb4n.css';
import '../../css/a/a_7gyw9ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6v7tkb8a"/><path class="qtysfgqaq"/><path clip-rule="evenodd" class="im3ryyb4n"/><path class="a_7gyw9ut"/>`,
		"fallback": "token:wombat",
	});
}

export default Component;
