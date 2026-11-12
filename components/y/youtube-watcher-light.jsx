import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5xq98bou.css';
import '../../css/r/r5_089bbx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5xq98bou"/><path class="r5_089bbx"/>`,
		"fallback": "selfhst:youtube-watcher-light",
	});
}

export default Component;
