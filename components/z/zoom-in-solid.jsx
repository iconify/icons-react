import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs4p0ceyx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zs4p0ceyx"/>`,
		"fallback": "streamline-plump:zoom-in-solid",
	});
}

export default Component;
