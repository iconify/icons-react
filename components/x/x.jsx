import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7itecbiq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v7itecbiq"/>`,
		"fallback": "heroicons-solid:x",
	});
}

export default Component;
