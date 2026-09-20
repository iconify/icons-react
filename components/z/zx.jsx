import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic_lku5dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic_lku5dx"/>`,
		"fallback": "simple-icons:zx",
	});
}

export default Component;
