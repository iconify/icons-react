import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ea9eg_obi.css';
import '../../css/u/ukjymo41a.css';
import '../../css/l/lmf-ioxuc.css';
import '../../css/l/l-efajjgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ea9eg_obi"/><path class="ukjymo41a"/><path class="lmf-ioxuc"/><path class="l-efajjgi"/></g>`,
		"fallback": "streamline-cyber-color:weight-training",
	});
}

export default Component;
