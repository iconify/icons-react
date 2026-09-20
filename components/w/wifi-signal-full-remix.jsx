import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq3f9327i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yq3f9327i"/>`,
		"fallback": "streamline-plump:wifi-signal-full-remix",
	});
}

export default Component;
