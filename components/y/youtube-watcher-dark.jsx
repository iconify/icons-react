import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szxsx5wma.css';
import '../../css/z/zf9qombco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szxsx5wma"/><path class="zf9qombco"/>`,
		"fallback": "selfhst:youtube-watcher-dark",
	});
}

export default Component;
