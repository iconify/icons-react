import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3cgnmb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v3cgnmb2c"/>`,
		"fallback": "nrk:xmark-circle-checked-solid",
	});
}

export default Component;
