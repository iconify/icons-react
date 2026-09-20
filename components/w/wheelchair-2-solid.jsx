import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg2s2rtgg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tg2s2rtgg"/>`,
		"fallback": "streamline-plump:wheelchair-2-solid",
	});
}

export default Component;
