import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4a_jpbqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4a_jpbqu"/>`,
		"fallback": "streamline-plump:wine-remix",
	});
}

export default Component;
