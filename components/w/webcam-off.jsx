import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nzfacpbuy.css';
import '../../css/d/d54lipb6l.css';
import '../../css/u/u78nidc3z.css';
import '../../css/w/webu_gbze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="nzfacpbuy"/><path class="d54lipb6l"/><path class="u78nidc3z"/><path class="webu_gbze"/></g>`,
		"fallback": "streamline-plump:webcam-off",
	});
}

export default Component;
