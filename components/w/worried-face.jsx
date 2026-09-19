import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/m/mir4otbpn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDocJv2Rk"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="mir4otbpn"/></g></mask></defs><path mask="url(#SVGDocJv2Rk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:worried-face",
	});
}

export default Component;
