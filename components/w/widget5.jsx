import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvd0dvxai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kvd0dvxai"/>`,
		"fallback": "reicon:widget5",
	});
}

export default Component;
