import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qixp1lbnf.css';
import '../../css/f/fic7ufbru.css';
import '../../css/y/y-6hrkbuj.css';
import '../../css/s/sx82wswwc.css';
import '../../css/d/d6rcm1bot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGICZWIcaL"><g class="ufeehvblu"><path class="qixp1lbnf"/><path class="fic7ufbru"/><path class="y-6hrkbuj"/><path class="sx82wswwc"/><path class="d6rcm1bot"/></g></mask></defs><path mask="url(#SVGICZWIcaL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:workbench",
	});
}

export default Component;
