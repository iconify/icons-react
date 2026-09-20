import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq24u9byu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eq24u9byu"/>`,
		"fallback": "streamline:wheelchair-remix",
	});
}

export default Component;
