import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_08pxbzy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_08pxbzy"/>`,
		"fallback": "f7:wifi-exclamationmark",
	});
}

export default Component;
