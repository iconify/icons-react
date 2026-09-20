import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt5jg9bzv.css';
import '../../css/e/ecruigbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kt5jg9bzv"/><path class="ecruigbtp"/>`,
		"fallback": "qlementine-icons:woodwind-24",
	});
}

export default Component;
