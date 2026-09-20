import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/iajjr2bhi.css';
import '../../css/o/o_yvu8b5f.css';
import '../../css/p/p5e1ahb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="iajjr2bhi"/><path class="o_yvu8b5f"/><path class="p5e1ahb3m"/></g>`,
		"fallback": "streamline-cyber:window-tabs-1",
	});
}

export default Component;
