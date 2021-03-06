package com.zer0net;

import com.bugsnag.BugsnagReactNative;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.keychain.KeychainPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.peel.react.TcpSocketsModule;
import com.reactnativenavigation.NavigationApplication;
import com.rnfs.RNFSPackage;

import org.reactnative.camera.RNCameraPackage;

import java.util.Arrays;
import java.util.List;

import io.realm.react.RealmReactPackage;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
                BugsnagReactNative.getPackage(),
                new KeychainPackage(),
                new RealmReactPackage(),
                new RNCameraPackage(),
                new RNDeviceInfo(),
                new RNFSPackage(),
                new TcpSocketsModule(),
                new VectorIconsPackage()
        );
    }

    @Override
    public void onCreate() {
        super.onCreate();
        BugsnagReactNative.start(this);
        SoLoader.init(this, /* native exopackage */ false);
    }
}
