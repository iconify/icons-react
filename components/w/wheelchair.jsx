import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bo0gd_fua.css';
import '../../css/i/itwm8w2av.css';
import '../../css/q/qub3njx_o.css';
import '../../css/w/wmsnpobfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bo0gd_fua"/><path class="itwm8w2av"/><path class="qub3njx_o"/><path class="wmsnpobfq"/></g>`,
		"fallback": "icon-park-solid:wheelchair",
	});
}

export default Component;
