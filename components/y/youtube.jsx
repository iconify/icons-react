import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s53vmbcgz.css';
import '../../css/m/m1yihhu0h.css';
import '../../css/r/repkyhzkx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s53vmbcgz"><path class="m1yihhu0h"/><path class="repkyhzkx"/></g>`,
		"fallback": "icon-park:youtube",
	});
}

export default Component;
