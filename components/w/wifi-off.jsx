import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/g-g_tbbws.css';
import '../../css/v/v4jlxqdsi.css';
import '../../css/s/sv-cgfflk.css';
import '../../css/c/cihtvxb9i.css';
import '../../css/s/s7ocxccpe.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="g-g_tbbws"/><path class="v4jlxqdsi"/><path class="sv-cgfflk"/></g><path class="cihtvxb9i"/><path class="s7ocxccpe"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:wifi-off",
	});
}

export default Component;
