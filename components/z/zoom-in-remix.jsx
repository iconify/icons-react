import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diq48hb7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="diq48hb7z"/>`,
		"fallback": "streamline-plump:zoom-in-remix",
	});
}

export default Component;
