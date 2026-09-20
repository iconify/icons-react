import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j43404xrm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j43404xrm"/>`,
		"fallback": "streamline-plump:wheat-solid",
	});
}

export default Component;
