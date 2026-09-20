import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q01kas6kr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q01kas6kr"/>`,
		"fallback": "streamline-plump:world-solid",
	});
}

export default Component;
