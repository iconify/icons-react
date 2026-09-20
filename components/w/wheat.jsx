import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z7753unpm.css';
import '../../css/w/w06lfnf7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="z7753unpm"/><path class="w06lfnf7f"/></g>`,
		"fallback": "streamline-plump-color:wheat",
	});
}

export default Component;
