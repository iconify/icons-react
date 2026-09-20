import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndp3-e9tq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndp3-e9tq"/>`,
		"fallback": "streamline-plump:zoom-in-gesture-remix",
	});
}

export default Component;
