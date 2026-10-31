import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l92gp4bum.css';
import '../../css/a/a-hmjzbcq.css';
import '../../css/w/wxac6ccpc.css';
import '../../css/v/v-787n_1k.css';
import '../../css/h/h9hqozbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l92gp4bum"/><path class="a-hmjzbcq wm-shine"/><path class="wm-k wxac6ccpc"/><path class="v-787n_1k wm-a"/><path class="h9hqozbfx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wreath",
	});
}

export default Component;
