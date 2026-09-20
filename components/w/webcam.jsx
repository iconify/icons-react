import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/w/w0qk0ibpf.css';
import '../../css/k/kql_pq4ud.css';
import '../../css/n/nh5zb3b5j.css';
import '../../css/v/v2pc336hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="w0qk0ibpf"/><path class="kql_pq4ud"/><path class="nh5zb3b5j"/><path class="v2pc336hk"/></g>`,
		"fallback": "streamline-cyber:webcam",
	});
}

export default Component;
