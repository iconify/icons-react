import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sugnyfphq.css';
import '../../css/i/i9bnjpm9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sugnyfphq"/><path class="i9bnjpm9k"/>`,
		"fallback": "token:xcm",
	});
}

export default Component;
