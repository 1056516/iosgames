import Ultraviolet from '@titaniumnetwork-dev/ultraviolet';
import UVClient from '@titaniumnetwork-dev/ultraviolet/client';

export type UltravioletCtor = typeof Ultraviolet;
export type UVClientCtor = typeof UVClient;

type Coded = string;

export type UVEncode = (input: Coded) => string;
export type UVDecode = (input: Coded) => string;

export interface UVConfig {
    prefix?: string;
    client?: string;
    handler?: string;
    bundle?: string;
    config?: string;
    sw?: string;
    encodeUrl?: UVEncode;
    decodeUrl?: UVDecode;
}

const config: UVConfig = {
    prefix: '/playervpn/',
    client: '/playervpn/uv.client.js',
    handler: '/playervpn/uv.sw.js',
    bundle: '/playervpn/uv.bundle.js',
    config: '/playervpn/uv.config.js',
    sw: '/playervpn/uv.sw.js',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
};

const ultraviolet = new Ultraviolet(config);
const uvClient = new UVClient(config);
