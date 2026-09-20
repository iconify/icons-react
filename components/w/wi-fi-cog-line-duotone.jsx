import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dt_kzxb6g.css';
import '../../css/b/bpny-o4rm.css';
import '../../css/r/rjyplsjao.css';
import '../../css/y/yzgz32bhq.css';
import '../../css/b/beul8bqqb.css';
import '../../css/k/kb42jzcum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dt_kzxb6g"/><path class="bpny-o4rm"/><path class="rjyplsjao"/><path class="yzgz32bhq"/><path class="beul8bqqb"/><path class="kb42jzcum"/></g>`,
		"fallback": "solar:wi-fi-cog-line-duotone",
	});
}

export default Component;
