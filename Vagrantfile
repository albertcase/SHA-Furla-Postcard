# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
 
  config.vm.box = "ubuntu14.04-20150827"
  config.vm.hostname = "sha-furla-postcard"

  
  config.vm.network :forwarded_port, guest: 80, host: 9221
  config.vm.network :forwarded_port, guest: 3306, host: 33221
  
  config.vm.network :private_network, ip: "192.168.33.10"

  config.vm.synced_folder "./", "/vagrant", :nfs => true
  #config.vm.synced_folder "./", "/vagrant"


  config.vm.provider :virtualbox do |vb|
  #   # Don't boot with headless mode
  #   vb.gui = true
  #
  #   # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end
  #

  config.vm.provision :puppet do |puppet|
    puppet.module_path = "puppet/modules"
    puppet.manifests_path = "puppet/manifests"
    puppet.manifest_file  = "site.pp"
  end

end
