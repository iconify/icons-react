import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmjhp2sbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmjhp2sbi"/>`,
		"fallback": "nrk:wifi-slash-expressive",
	});
}

export default Component;
